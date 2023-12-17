import { useDefaultLayout } from "@/hooks/useLayout";
import type { NextPageWithLayout } from "@/utils/types";
import { useState } from "react";
const PlayPage: NextPageWithLayout = () => {
  const AccDetails = {
    name: "Elon Musk",
    subscribers: "10,000,000",
    videos: [
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
        comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
      },
      {
        name: "Wonka (2023)",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
        comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
        comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
        comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
        comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
      {
        name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
        date: "4 days ago",
        channelName: "Yo Hippy",
        thumbnail:
          "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
        url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      },
    ],
  };
  const videos = [
    {
      name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",
      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
      comment: ["dwadawdawdawdw", "awdawdad3qee23e2"],
    },
    {
      name: "Wonka (2023)",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",

      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
      name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",

      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
      name: "Wonka (2023)",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",

      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
      name: "영화 'Wonka'(2023) 예고편(trailer)으로 영어 공부하기",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",

      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
    {
      name: "Wonka (2023)",
      date: "4 days ago",
      channelName: "Yo Hippy",
      description:
        "     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas nulla quibusdam quisquam reiciendis beatae adipisci aperiam quas cupiditate autem modi, fuga aspernatur magnam non commodi minus cum excepturi sequi rem eius soluta. Ipsam fuga voluptatibus, sed illum quos beatae autem odio obcaecati. Cumque perspiciatis ducimus aliquam voluptates itaque iure temporibus praesentium corrupti deleniti, culpa suscipit ex magni vero asperiores provident architecto nemo repudiandae! Aperiam suscipit, nam explicabo eveniet unde, cum tempora ducimus neque libero et at perferendis voluptas. Deleniti doloremque architecto, dicta esse necessitatibus officia quibusdam recusandae distinctio, nihil aliquam illo in. Accusamus magnam nihil praesentium quas quam. Aliquam.        ",

      thumbnail:
        "https://i.pinimg.com/originals/56/f0/c7/56f0c7de57fdae6d0a9ddc43448b6dff.png",
      url: "https://www.youtube.com/embed/wYmtRhKvmVE?si=wVWcqX8E2fXe_ZEk",
    },
  ];
  const [showFullDescription, setShowFullDescription] = useState(false);

  function toggleDescription() {
    setShowFullDescription(!showFullDescription);
  }

  function displayVideoList(detail: any) {
    const details = [];
    for (let i = 0; i < AccDetails.videos.length; i++) {
      details.push(
        <div className=" rounded-lg overflow-hidden w-full h-54 flex flex-col object-contain bg-gray-200 hover:bg-gray-500">
          <iframe
            src={AccDetails.videos[i].url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <p className="text-black w-full pl-2 whitespace-nowrap mt-2">
            {AccDetails.videos[i].name}
          </p>
          <div className="pl-2"> {AccDetails.videos[i].date}</div>
        </div>
      );
    }
    return details;
  }
  function displayVideoDetails(video: any) {
    const wordsInDescription = video.description.split(/\s+/);
    const truncatedDescription =
      wordsInDescription.length > 10
        ? wordsInDescription.slice(0, 10).join(" ") + "..."
        : video.description;

    return (
      <div className="rounded-lg overflow-hidden w-full h-54 flex flex-col object-contain bg-gray-200 hover:bg-gray-500">
        <div className="pl-2">
          {showFullDescription ? video.description : truncatedDescription}
        </div>
        {wordsInDescription.length > 10 && (
          <button
            className="text-blue-500 underline p-2"
            onClick={toggleDescription}
          >
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    );
  }

  const cameraOn = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const videoElement = document.querySelector(".camera-stream");
        if (videoElement) {
          videoElement.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  };

  return (
    <>
      <div className="VStack w-full">
        <div className="w-full">
          <video
            className=" w-full"
            src="https://firebasestorage.googleapis.com/v0/b/fileuploader-7c008.appspot.com/o/uploads%2F1702735616725-RE.mp4?alt=media&token=82c62600-7ee4-47fd-93dc-21d94bbd312b"
            controls={true}
          ></video>
        </div>
        <div className="HStack justify-between items-center">
          <p className="Title text-xl">{videos[0].name}</p>
          <div className="HStack items-center text-white System-background-ocean-blue Circle">
            <p className="p-4">Like</p>
            <p className="p-4">Say</p>
            <p className="p-4">Hippy</p>
            <p className="p-4">React</p>
          </div>
        </div>
        <div className="HStack">12,234,123 views</div>
        <div> {displayVideoDetails(videos[0])}</div>
        <div className="HStack">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            className="w-10 h-10"
            alt=""
          />
          <div className="VStack">
            <p>Yo HippyScience</p>
            <p>128k follower</p>
          </div>
          <button className="Button-primary pl-4 pr-4 Circle">Follow</button>
        </div>
        <div className=" overflow-y-scroll gap-4 HStack max-w-3xl min-w-3xl">
          {displayVideoList(AccDetails)}
        </div>
        <div className="VStack">
          Comment
          <textarea
            name=""
            className="System-background-blue rounded-md"
            id=""
            cols="15"
            rows="5"
            placeholder="Comment here bro!"
          ></textarea>
          <div className="HStack">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-10 h-10"
              alt=""
            />
            <div className="VStack">
              <p>Yoza555</p>
            <p>{videos[0].comment[0]}</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PlayPage.getLayout = useDefaultLayout;

export default PlayPage;