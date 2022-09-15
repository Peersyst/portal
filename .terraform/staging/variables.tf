variable "cloudflare-token" {
    sensitive = true
}

variable "docker-token" {
    sensitive = true
}

variable "aws-region" {
    default = "eu-west-1"
}

variable "aws-access-key-id" {
    type = string
    sensitive = true
}

variable "aws-secret-access-key" {
    type = string
    sensitive = true
}

variable "project-name" {
    type = string
}

variable "branch" {
    type = string
}
