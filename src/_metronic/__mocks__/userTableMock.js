import { toAbsoluteUrl } from "../utils/utils";

export default [
  {
    id: 1,
    username: "admin",
    password: "demo",
    email: "admin@demo.com",
    accessToken: "access-token-8f3ae836da744329a6f93bf20594b5cc",
    refreshToken: "access-token-f8c137a2c98743f48b643e71161d90aa",
    roles: [1], // Administrator
    pic: toAbsoluteUrl("/media/users/300_7.jpg"),
    fullname: "Sadmin",
    occupation: "CEO",
    companyName: "Keenthemes",
    phone: "456669067890",
    address: {
      addressLine: "L-12-20 Vertex, Cybersquare",
      city: "San Francisco",
      state: "California",
      postCode: "45000"
    },
    socialNetworks: {
      linkedIn: "https://linkedin.com/admin",
      facebook: "https://facebook.com/admin",
      twitter: "https://twitter.com/admin",
      instagram: "https://instagram.com/admin"
    }
  }
];
