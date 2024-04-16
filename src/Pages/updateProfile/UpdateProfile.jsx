import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const { user, updateNamePhoto} = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { name, photourl } = data;
    updateNamePhoto(name, photourl)
      .then(() => {})
      .catch((error) => {
        console.log(error.code);
      });
  };

  console.log(user);
  const { displayName, photoURL, email } = user;
  return (
    <div className="max-w-xl mx-auto bg-base-300 rounded-lg py-10 my-5">
      <Helmet>
        <title>Update Profile - IndusNet</title>
      </Helmet>
      <div className="text-center mx-auto">
        <h2 className="text-2xl font-bold border-b py-2">Hi , {displayName}</h2>
        <p className="pb-2">Update Your Profile</p>
        <div className="avatar">
          <div className="w-32 rounded">
            <img src={photoURL} />
          </div>
        </div>
        <p className=" font-bold border-b py-2">Email : {email}</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mt-4">
          <div className=" w-96 mx-auto bg-white rounded-lg">
            <label className="input input-bordered flex items-center gap-2">
              Name :
              <input
                type="text"
                className="grow"
                placeholder={`${displayName}`}
                {...register("name")}
              />
            </label>
          </div>
          <div className=" w-96 mx-auto bg-white rounded-lg">
            <label className="input input-bordered flex items-center gap-2">
              PhotoURL :
              <input
                type="text"
                className="grow"
                {...register("photourl")}
                placeholder={`${photoURL}`}
              />
            </label>
          </div>
          <button className="btn bg-[#587187] text-white font-bold text-base">
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
