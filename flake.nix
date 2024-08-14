{
  inputs = {

    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, flake-utils }: let

    inherit (flake-utils.lib) eachDefaultSystem;
    mkFlake = system: let

      # The set of packages to be used.
      pkgs = import nixpkgs { 
        inherit system; 
        config.allowUnfree = true; 
      };

      env-name = "portfolio";
      fhsEnv = pkgs.buildFHSUserEnv {
        
        name = "${env-name}";
        targetPkgs = pkgs: [

          pkgs.nodejs-slim
          pkgs.nodePackages_latest.pnpm
          
          pkgs.git
          pkgs.openssh
          pkgs.bun
          pkgs.wrangler
        ];
      };

    in {

      devShells.default = pkgs.mkShell {

        # The packages used within the project.
        buildInputs = [ fhsEnv ];
        shellHook = ''

          exec ${fhsEnv}/bin/${env-name}
        '';
      };
    };

  in eachDefaultSystem mkFlake;
}
