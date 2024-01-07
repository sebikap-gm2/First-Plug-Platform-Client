type User = {
  name: string;
  email: string;
  password: string;
  image: string;
};

export type RegisterUser = Pick<User, "name" | "email" | "password">;

export type RegisterUserPlatforms = Pick<User, "name" | "email" | "image">;

export type LoginUser = Pick<User, "email" | "password">;
