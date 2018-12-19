action "action test" {
  uses = "./action-test/"
}

workflow "New workflow" {
  on = "push"
  resolves = ["Snyk Test"]
}

action "Snyk Test" {
  uses = "actions/npm@c555744"
  runs = "npm install -g snyk && snyk auth $SNYK_TOKEN"
  secrets = ["SNYK_TOKEN"]
}
