action "action test" {
  uses = "./action-test/"
}

workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for npm"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@c555744"
  runs = "npm install -g snyk && snyk auth $SNYK_TOKEN"
  secrets = ["SNYK_TOKEN"]
}
