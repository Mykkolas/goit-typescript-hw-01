type Page = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date,
        updateAt: Date
    }
}

let page1: Page = {
    title: "hi",
    likes: 100,
    accounts: ["Alex", "Tony"],
    status: 'close'
};

console.log(page1);


