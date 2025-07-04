// Make sure the path is correct; adjust if needed
import AuthForm from "@/components/ui/AuthForm";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
