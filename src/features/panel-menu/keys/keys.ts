export const keysSideBar = [
  {
    label: "Chats",
    icon: "pi pi-envelope",
    styleClass: "file-item",
    badge: 5,
    items: [
      {
        label: "All chats",
        icon: "pi pi-file-edit",
        shortcut: "⌘+N",
      },
      {
        label: "Inbox",
        icon: "pi pi-inbox",
        badge: 5,
      },
      {
        label: "Sent",
        icon: "pi pi-send",
        shortcut: "⌘+S",
      },
      {
        label: "Trash",
        icon: "pi pi-trash",
        shortcut: "⌘+T",
      },
    ],
  },
  {
    label: "Create a new chat",
    icon: "pi pi-chart-bar",
    styleClass: "file-item",
    shortcut: "⌘+R",
  },
  {
    label: "About",
    icon: "pi pi-user",
    shortcut: "⌘+W",
  },
];
