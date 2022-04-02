export const Role = {
  Admin: 'Admin',
  Manager: 'Manager',
  Editor: 'Editor',
  User: 'User'    
}

/**
 * Rules For Roles
 */
export const rules = {
  visitor: {
    static: ["posts:list", "home-page:visit"]
  },
  User: {
    static: [
      "posts:list",
      "posts:create",
      "posts:read",
      "blogs:read",
      "blogs:create",
      "comments:list",
      "comments:create",
      "users:getSelf",
      "home-page:visit",
      "dashboard-page:visit"
    ],
    dynamic: {
      "posts:edit": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
      "comments:edit": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
      "comments:delete": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
      "blogs:delete": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      }
    }
  },
  Editor: {
    static: [
      "posts:list",
      "posts:create",
      "posts:read",
      "posts:edit",
      "blogs:read",
      "blogs:create",
      "comments:list",
      "comments:create",
      "users:getSelf",
      "home-page:visit",
      "dashboard-page:visit"
    ],
    dynamic: {
      "posts:delete": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
      "comments:edit": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
      "comments:delete": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
      "blogs:delete": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      }
    }
  },
  Manager: {
    static: [
      "posts:list",
      "posts:create",
      "posts:read",
      "posts:edit",
      "blogs:read",
      "blogs:create",
      "comments:list",
      "comments:create",
      "users:get",
      "users:getSelf",
      "home-page:visit",
      "dashboard-page:visit"
    ],
    dynamic: {
      "posts:delete": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
      "comments:edit": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
      "comments:delete": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
      "user:edit": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
      "blogs:delete": ({userId, postOwnerId}) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      }
    }
  },
  Admin: {
    static: [
      "posts:list",
      "posts:create",
      "posts:read",
      "posts:edit",
      "posts:delete",
      "blogs:read",
      "blogs:create",
      "blogs:delete",
      "comments:list",
      "comments:create",
      "comments:edit",
      "comments:delete",
      "users:get",
      "users:edit",
      "users:delete",
      "users:getSelf",
      "subs:delete",
      "home-page:visit",
      "dashboard-page:visit",
      "admin:admin"
    ]
  }
};