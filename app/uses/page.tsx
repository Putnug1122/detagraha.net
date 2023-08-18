export default function Uses() {
  const UsesItem = ({ title, description }: any) => {
    return (
      <div>
        <h3>{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );
  };

  return (
    <>
      <main className="mx-auto max-w-2xl w-full space-y-8 my-10">
        <h1 className="text-4xl font-bold">Uses</h1>
        <p>Here is a list of gear and software that I use on the day-to-day.</p>

        <h2 className="text-2xl font-bold">Office</h2>
        <div className="grid grid-cols-2 gap-4 w-full">
          <UsesItem
            title="ASUS TUF Gaming A15"
            description="4800H CPU, 24GB RAM, 1660 Ti GPU"
          />
          <UsesItem title="Samsung 24SR350" description="Monitor" />
          <UsesItem title="Rexus Xierra X12" description="Mouse" />
        </div>

        <h2 className="text-2xl font-bold">Programming</h2>
        <div className="grid grid-cols-2 gap-4 w-full">
          <UsesItem
            title="Visual Studio Code"
            description="Tokyo Night theme"
          />
          <UsesItem title="Neovim" description="Neovim with Lunarvim config" />
          <UsesItem title="Vercel" description="Project deployment" />
          <UsesItem title="GitHub" description="Version control" />
          <UsesItem title="Hostinger" description="Domain" />
          <UsesItem title="Ranger" description="File Manager" />
        </div>

        <h2 className="text-2xl font-bold">Self-hosting</h2>
        <div className="grid grid-cols-2 gap-4 w-full">
          <UsesItem title="Umami" description="Analytics" />
          <UsesItem title="Pingvin Share" description="File sharing" />
          <UsesItem title="Memos" description="Note taking" />
        </div>

        <h2 className="text-2xl font-bold">Other Tools</h2>
        <div className="grid grid-cols-2 gap-4 w-full">
          <UsesItem
            title="Chrome, Firefox, and Brave"
            description="Web browser"
          />
          <UsesItem title="Perplexity" description="Search Engine" />
          <UsesItem title="Adobe Suite" description="Photo and video editing" />
          <UsesItem title="Spotify" description="Audio and podcast streaming" />
          <UsesItem title="PopOS" description="Operating system" />
          <UsesItem title="Windows 11" description="Operating system" />
        </div>
      </main>
    </>
  );
}
