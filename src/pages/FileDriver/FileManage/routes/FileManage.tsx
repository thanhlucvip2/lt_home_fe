import { useNotification } from "src/hooks/useNotification";
import { useGetAllFile } from "../api/getAllFile";

export const FileManage = () => {
  // const { addNotification } = useNotification();
  const { data } = useGetAllFile({});
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data?.data.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="http://localhost/hachee/api/upload/get-file/1691555660308_image.png"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
