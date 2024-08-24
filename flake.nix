{
  outputs = inputs @ {
    flake-parts,
    devenv-root,
    nixpkgs,
    ...
  }:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [
        inputs.devenv.flakeModule
      ];

      systems = ["x86_64-linux" "i686-linux" "x86_64-darwin" "aarch64-linux" "aarch64-darwin"];
      perSystem = {
        config,
        self',
        inputs',
        pkgs,
        system,
        ...
      } @ args: {
        devenv = import ./devenv.nix (args // {inherit devenv-root;});
      };

      flake = {
        # See: https://nix.dev/manual/nix/2.22/command-ref/new-cli/nix3-fmt
        formatter.x86_64-linux = nixpkgs.legacyPackages.x86_64-linux.alejandra;
      };
    };

  inputs = {
    devenv-root = {
      url = "file+file:///dev/null";
      flake = false;
    };

    nixpkgs.url = "github:cachix/devenv-nixpkgs/rolling";
    devenv.url = "github:cachix/devenv";

    nix2container.url = "github:nlewo/nix2container";
    nix2container.inputs.nixpkgs.follows = "nixpkgs";
    mk-shell-bin.url = "github:rrbutani/nix-mk-shell-bin";

    fenix.url = "github:nix-community/fenix";
    fenix.inputs = {nixpkgs.follows = "nixpkgs";};
  };

  nixConfig = {
    extra-trusted-public-keys = "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    extra-substituters = "https://devenv.cachix.org";
  };
}
