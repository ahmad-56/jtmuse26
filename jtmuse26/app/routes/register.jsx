import { FilloutStandardEmbed } from "@fillout/react";


export function meta() {
  return [{ title: "register" }];
}

function Register() {
  return (
    <div className="min-h-[84vh] w-full flex justify-center items-center py-[-4rem] bg-[#F2F2F2]">
      <div className="h-[95vh] w-[100vw] pb-15 pt-16 ">
        <FilloutStandardEmbed
          filloutId="a5mWYF56vpus"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        />
      </div>
    </div>
  );
}

export default Register;