import Button from "../components/Button";

export default {
  title: "Components/Buttons/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isLoading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  isLoading: false,
};
