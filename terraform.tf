provider "azurerm" {
  features {}
}

variable "storage_account_name" {
  description = "The name of the storage account."
  type        = string
}

variable "location" {
  description = "The Azure region where the storage account will be deployed."
  type        = string
  default     = "eastus"
}

resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  location                 = var.location
  resource_group_name      = azurerm_resource_group.example.name
  account_tier             = "Standard"
  account_replication_type = "LRS"
  kind                     = "StorageV2"
  access_tier              = "Hot"
}

resource "azurerm_resource_group" "example" {
  name     = "example-resource-group"
  location = var.location
}