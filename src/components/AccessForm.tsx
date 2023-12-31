import { FormInput, Card } from "./";
import { CustomLink } from "@/common";

interface Props {
  handleInput: (prop: string, value: unknown) => void;
}
export const AccessForm = function ({ handleInput }: Props) {
  return (
    <Card Title="Access" className="w-1/2 flex flex-col gap-5">
      <FormInput
        handleInput={handleInput}
        prop="email"
        type="text"
        title="Email Address"
        placeholder="user@workemail.com"
      />

      <div className="flex items-center gap-8">
        <FormInput
          handleInput={handleInput}
          prop="password"
          title="Password"
          type="password"
          placeholder="password"
        />
        <CustomLink href="#">Change Password</CustomLink>
      </div>
    </Card>
  );
};
