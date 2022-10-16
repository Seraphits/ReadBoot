import {useRouter} from "next/router"

function ChatPageSlug() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>ChatPage Slug</h1>
    </div>
  )
}
export default ChatPageSlug;
