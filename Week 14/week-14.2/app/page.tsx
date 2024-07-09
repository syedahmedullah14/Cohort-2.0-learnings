import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}

//async component
export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex justify-center border-b rounded-sm p-5 w-fit bg-black text-cyan-600">
      hi there <br />
      {userData.email}
      {userData.name}
    </div>
  );
}
