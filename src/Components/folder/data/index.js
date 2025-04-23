
export const foldersData = {
    id:"1",
    name: "root",
    isFolder: true,
    children: [
      {
        id:"2",
        name: "public",
        isFolder: true,
        children: [
          {
            id:"3",
            name: "public nested 1",
            isFolder: true,
            children: [
              {
                id:"4",
                name: "index.html",
                isFolder: false,
                children: []
              },
              {
                id:"5",
                name: "hello.html",
                isFolder: false,
                children: []
              }
            ]
          },
          {
            id:"6",
            name: "public_nested_file",
            isFolder: false,
            children: []
          }
        ]
      },
      {
        id:"7",
        name: "src",
        isFolder: true,
        children: [
          {
            id:"8",
            name: "App.js",
            isFolder: false,
            children: []
          },
          {
            id:"9",
            name: "Index.js",
            isFolder: false,
            children: []
          },
          {
            id:"10",
            name: "styles.css",
            isFolder: false,
            children: []
          }
        ]
      },
      {
        id:"11",
        name: "package.json",
        isFolder: false,
        children: []
      }
    ]
  };