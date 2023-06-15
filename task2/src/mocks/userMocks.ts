import { TeamMember, Invite } from '../types'

export const getUsers = (): Promise<TeamMember[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          status: "request",
          user: {
            id: 101,
            name: "Joe",
            lastName: "Bloggs",
            phone: "+8088005553535",
            email: "test@test.com"
          },
          role: "Administrator"
        },
        {
          id: 2,
          status: "request",
          user: {
            id: 102,
            name: "Sarah",
            lastName: "Connors",
            phone: "+8088005553536",
            email: "test2@test.com"
          },
          role: "Administrator"
        },
        {
          id: 3,
          status: "approved",
          user: {
            id: 103,
            name: "Joespeh",
            lastName: "Bloggs",
            phone: "+8088005553537",
            email: "test3@test.com"
          },
          role: "Standard"
        },
        {
          id: 4,
          status: "approved",
          user: {
            id: 104,
            name: "Sarah",
            lastName: "Connors",
            phone: "+8088005553538",
            email: "test4@test.com"
          },
          role: "Standard"
        },
        {
          id: 5,
          status: "approved",
          user: {
            id: 105,
            name: "Mathew",
            lastName: "Murphy",
            phone: "+8088005553539",
            email: "test5@test.com"
          },
          role: "Standard"
        },
        {
          id: 6,
          status: "approved",
          user: {
            id: 106,
            name: "Joespeh",
            lastName: "Bloggs",
            phone: "+8088005553540",
            email: "test6@test.com"
          },
          role: "Standard"
        },
        {
          id: 7,
          status: "approved",
          user: {
            id: 107,
            name: "Sarah",
            lastName: "Connors",
            phone: "+8088005553541",
            email: "test7@test.com"
          },
          role: "Standard"
        },
        {
          id: 8,
          status: "approved",
          user: {
            id: 108,
            name: "Mathew",
            lastName: "Murphy",
            phone: "+8088005553542",
            email: "test8@test.com"
          },
          role: "Standard"
        },
        {
          id: 9,
          status: "approved",
          user: {
            id: 109,
            name: "Joespeh",
            lastName: "Bloggs",
            phone: "+8088005553543",
            email: "test9@test.com"
          },
          role: "Standard"
        },
      ]);
    }, 300);
  });
};

export const getInvites = (): Promise<Invite[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 14,
          phone: '+353 1234567',
          role: "Administrator",
        },
        {
          id: 15,
          phone: '+353 3334568',
          role: "Standard",
        },
      ]);
    }, 400);
  });
}