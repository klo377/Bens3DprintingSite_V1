import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Heading, Text } from '../../components/Typography';
import { supabase } from '../../lib/supabase';
import { Group, Post, STLFile } from '../../types/community';
import { STLViewer } from '../../components/STLViewer';
import { useAuthStore } from '../../store/authStore';

export function GroupPage() {
  const { groupId } = useParams();
  const [group, setGroup] = useState<Group | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [files, setFiles] = useState<STLFile[]>([]);
  const [loading, setLoading] = useState(true);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    async function fetchGroupData() {
      const [groupData, postsData, filesData] = await Promise.all([
        supabase.from('groups').select('*').eq('id', groupId).single(),
        supabase.from('posts').select('*').eq('group_id', groupId).order('created_at', { ascending: false }),
        supabase.from('stl_files').select('*').eq('group_id', groupId).order('created_at', { ascending: false })
      ]);

      if (groupData.data) setGroup(groupData.data);
      if (postsData.data) setPosts(postsData.data);
      if (filesData.data) setFiles(filesData.data);
      setLoading(false);
    }

    fetchGroupData();
  }, [groupId]);

  if (loading) return <Text>Loading...</Text>;
  if (!group) return <Text>Group not found</Text>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Heading>{group.name}</Heading>
          <Text className="text-gray-600">{group.description}</Text>
        </div>
        {user && (
          <div className="space-x-4">
            <Link
              to={`/community/groups/${groupId}/post/new`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              New Post
            </Link>
            <Link
              to={`/community/groups/${groupId}/files/upload`}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Upload STL
            </Link>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <Heading className="text-2xl">Recent Posts</Heading>
          {posts.map((post) => (
            <Link key={post.id} to={`/community/posts/${post.id}`}>
              <Card className="hover:shadow-lg transition-shadow duration-200">
                <Heading className="text-xl mb-2">{post.title}</Heading>
                <Text className="mb-4 line-clamp-3">{post.content}</Text>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.likes} likes • {post.comment_count} comments</span>
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="space-y-6">
          <Heading className="text-2xl">STL Files</Heading>
          {files.map((file) => (
            <Card key={file.id} className="hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 mb-4">
                <STLViewer url={file.file_url} />
              </div>
              <Heading className="text-lg mb-2">{file.name}</Heading>
              <Text className="mb-4 line-clamp-2">{file.description}</Text>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{file.download_count} downloads</span>
                {file.price ? (
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Buy for ${file.price}
                  </button>
                ) : (
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Download
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}