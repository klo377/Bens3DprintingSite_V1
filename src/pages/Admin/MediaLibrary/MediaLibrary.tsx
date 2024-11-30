import React, { useState, useCallback } from 'react';
import { Card } from '../../../components/Card';
import { Heading, Text } from '../../../components/Typography';
import { supabase } from '../../../lib/supabase';

export function MediaLibrary() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (file) => {
    try {
      setUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('media')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(filePath);

      setFiles([...files, { name: file.name, url: publicUrl }]);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(uploadFile);
  }, []);

  return (
    <div className="space-y-6">
      <Card>
        <Heading className="mb-4">Media Library</Heading>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
          onDrop={(e) => {
            e.preventDefault();
            onDrop(Array.from(e.dataTransfer.files));
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <Text>Drag and drop files here, or click to select files</Text>
          <input
            type="file"
            multiple
            onChange={(e) => {
              if (e.target.files) {
                Array.from(e.target.files).forEach(uploadFile);
              }
            }}
            className="hidden"
          />
        </div>
      </Card>

      <div className="grid grid-cols-4 gap-4">
        {files.map((file, index) => (
          <Card key={index}>
            <img
              src={file.url}
              alt={file.name}
              className="w-full h-32 object-cover rounded-lg"
            />
            <Text className="mt-2 truncate">{file.name}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
}