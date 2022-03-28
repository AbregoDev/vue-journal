export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat maiores libero veniam commodi ratione ea modi hic placeat nisi sed dolor, magnam officiis. Explicabo sit quos eum accusantium recusandae!',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat maiores libero veniam commodi ratione ea modi hic placeat nisi sed dolor, magnam officiis. Explicabo sit quos eum accusantium recusandae!',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, repellat maiores libero veniam commodi ratione ea modi hic placeat nisi sed dolor, magnam officiis. Explicabo sit quos eum accusantium recusandae!',
            picture: null,
        },
    ],
})