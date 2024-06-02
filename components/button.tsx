import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="h-12 justify-center items-center w-full bg-primary/20 border border-primary rounded-xl"
      {...props}
    >
      <Text className="relative -top-0.5 text-base text-white font-medium -tracking-tighter">{children}</Text>
    </TouchableOpacity>
  );
}
