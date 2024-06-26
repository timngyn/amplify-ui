Feature: Load an image from S3 with protected access level settings

  Background:
    Given I'm running the example "ui/components/storage/storage-image/protected-image"

  @react
  Scenario: I successfully load a protected image
    When I type my "email" with status "CONFIRMED"
    Then I type my password
    Then I click the "Sign in" button
    Then I see "Loader1" element
    Then I see "Loader2" element
    Then I see the "protected cat 1" image
    Then I see the "protected cat 2" image
    Then I see "The first protected image is loaded."
    Then I see "The second protected image is loaded."
    Then I see "Sign out"
    Then I click "Sign out"
    Then I see "Sign in"
    