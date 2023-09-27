import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";
const FORM_URL = "/api/forms";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    createUserForm: builder.mutation({
      query: (data) => ({
        url: `${FORM_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
    userForm: builder.mutation({
      query: (data) => ({
        url: `${FORM_URL}/getform`,
        method: "GET",
        body: data,
      }),
    }),
    updateForm: builder.mutation({
      query: (data) => ({
        url: `${FORM_URL}/getform`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useCreateUserFormMutation,
  useUserFormMutation,
  useUpdateFormMutation,
} = usersApiSlice;
