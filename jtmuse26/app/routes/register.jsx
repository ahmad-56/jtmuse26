import { FilloutStandardEmbed } from "@fillout/react";


export function meta() {
  return [{ title: "register" }];
}

function Register() {
  return (
    <div className="registration-page min-h-[84vh] w-full flex justify-center items-center bg-transparent">
      <div className="h-[95vh] w-full pt-16">
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
