import Link from "next/link";
import Image from "next/image";
const index = () => {
  return (
    <div>
      <h1 className="title">
        Read <Link href="/posts/firstPost">this page!</Link>
      </h1>
     
    </div>
  );
};
export default index;
