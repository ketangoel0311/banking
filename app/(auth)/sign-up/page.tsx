import AuthForm from "@/components/ui/AuthForm";
//import { getLoggedInUser } from "@/lib/actions/user.action";

const SignUp = async () => {
  // const loggedInUser = await getLoggedInUser();
  // console.log(loggedInUser);
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
