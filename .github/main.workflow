workflow "test" {
  on = "push"
  resolves = ["Hello World"]
}

action "Hello World" {
  uses = "./action-test"
}
