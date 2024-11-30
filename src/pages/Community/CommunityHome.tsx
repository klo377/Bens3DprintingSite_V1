import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Heading, Text } from '../../components/Typography';
import { supabase } from '../../lib/supabase';
import { Group } from '../../types/community';
import { useAuthStore } from '../../store/authStore';

export function CommunityHome() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    async function fetchGroups() {
      const { data, error } = await supabase
        .from('groups')
        .select('*')
        .order('member_count', { ascending: false });

      if (!error && data) {
        setGroups(data);
      }
      setLoading(false);
    }

    fetchGroups();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Heading>3D Printing Community</Heading>
        {user && (
          <Link
            to="/community/groups/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Create Group
          </Link>
        )}
      </div>

      {loading ? (
        <Text>Loading groups...</Text>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <Link key={group.id} to={`/community/groups/${group.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                <Heading className="text-xl mb-2">{group.name}</Heading>
                <Text className="mb-4">{group.description}</Text>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{group.member_count} members</span>
                  <span>{new Date(group.created_at).toLocaleDateString()}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}