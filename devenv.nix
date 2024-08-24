{
  config,
  pkgs,
  devenv-root,
  ...
} @ args: {
  shells.default = {
    name = "portfolio";
    packages = with pkgs; [
      git
      wrangler
    ];

    # Generates a .devcontainer configuration file.
    devcontainer.enable = true;
    env = {};

    # TypeScript for better DX
    languages.typescript.enable = true;
    languages.javascript = {
      enable = true;
      pnpm.enable = true;
      bun.enable = true;
    };

    # + Linting and formatting hooks.
    pre-commit.hooks.alejandra.enable = true;
    devenv.root = let
      devenvRootFileContent = builtins.readFile devenv-root.outPath;
    in
      pkgs.lib.mkIf (devenvRootFileContent != "") devenvRootFileContent;
  };
}
