export const data = {
  link: "syntax-highlighting-demo",
  title: "Syntax highlighting",
  author: "[Cursors]",
  content: [
    {
      type: "text",
      content:
        "A few hours of work later and this is the result. Almost flawless syntax highlighting for my posts. The algorithm that does it is no secret as it is on github.",
    },
    {
      type: "text",
      content: "First up is HTML:",
    },
    {
      type: "code",
      content: `<h1
    class="hello" 
    id="world"
>
    &lt;hello world&gt;
</h1>`,
      lang: "html",
    },
    {
      type: "text",
      content:
        "This was probably the simplest; only needed to check for tags and attributes. I also added escape code highlighting for extra flair. Let's see CSS next.",
    },
    {
      type: "code",
      content: `h1.hello {
    font-size: 4rem;
}`,
      lang: "css",
    },
  ],
  createdAt: "Oct 30, 2020",
};
