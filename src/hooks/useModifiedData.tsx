import { useEffect, useState } from 'react';
import { useFetchInformation } from './useFetchInformatino';

interface ModifiedData {
  modifiedData: string[];
  loading: boolean;
  error?: string | null;
}

const useModifiedData = (apiUrl: string): ModifiedData => {
  const { data, loading, error } = useFetchInformation(apiUrl);
  const [modifiedData, setModifiedData] = useState<string[]>([]);

  useEffect(() => {
    let imageUrls: string[] = [];

    data?.featured_project?.forEach((info: any) => {
      imageUrls = [
        ...imageUrls,
        ...(info?.data?.images?.list?.map((imageObj: any, index: number) => {
          if (index % 2 === 0) {
            return imageObj?.full_path;
          }
          return null;
        }) || [])
      ];
    });

    setModifiedData(imageUrls.filter(Boolean));
  }, [data]);

  return { modifiedData, loading, error };
};

export default useModifiedData;
