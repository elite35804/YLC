export default {
  header: {
    self: {},
    items: [
      {
        title: "Dashboards",
        root: true,
        alignment: "left",
        page: "dashboard",
      },
      {
        title: "Account",
        root: true,
        alignment: "left",
        page: "account",
      },
      {
        title: "Configuration",
        root: true,
        alignment: "left",
        page: "configuration",
      },
      {
        title: "Manage Numbers",
        root: true,
        alignment: "left",
        page: "manage_numbers",
      },
      {
        title: "Activity Log",
        root: true,
        alignment: "left",
        page: "activity_log",
      },
      {
        title: "Billing",
        root: true,
        alignment: "left",
        toggle: "click",
        submenu: [
          {
            title: "Invoices",
            bullet: "dot",
            page: "invoices"
          },
          {
            title: "Payments",
            bullet: "dot",
            page: "payments"
          }
        ]
      },
      {
        title: "Call Log",
        root: true,
        alignment: "left",
        page: "call_log",
      },
      {
        title: "Quick Pay",
        root: true,
        alignment: "left",
        page: "quick_pay",
      },
    ]
  },
  aside: {
    self: {},
    items: [
      {
        title: "Dashboard",
        root: true,
        icon: "flaticon2-architecture-and-city",
        page: "dashboard",
        bullet: "dot"
      },
      {
        title: "Account",
        root: true,
        icon: "flaticon2-user-1",
        page: "account",
        bullet: "dot"
      },
      {
        title: "Configuration",
        root: true,
        icon: "flaticon2-settings",
        page: "configuration",
        bullet: "dot"
      },
      {
        title: "Manage Numbers",
        root: true,
        icon: "flaticon2-phone",
        page: "manage_numbers",
        bullet: "dot"
      },
      {
        title: "Activity Log",
        root: true,
        icon: "flaticon2-envelope",
        page: "activity_log",
        bullet: "dot"
      },
      {
        title: "Billing",
        root: true,
        icon: "flaticon2-list",
        bullet: "dot",
        submenu: [
          {
            title: "Invoices",
            page: 'invoices'
          },
          {
            title: 'Payments',
            page: "payments"
          }
        ]
      },
      {
        title: "Call Log",
        root: true,
        icon: "flaticon2-lorry",
        page: "call_log",
        bullet: "dot"
      },
      {
        title: "Quick Pay",
        root: true,
        icon: "flaticon2-cd",
        page: "quick_pay",
        bullet: "dot"
      },
    ]
  }
};
