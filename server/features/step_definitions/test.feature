# Feature: it is friday yet?
  # Every wants to know when it's Friday

  # The first example has two steps
  # Scenario: Sunday isn't Friday
  #   Given today is Sunday
  #   When I ask wether it's Friday yet
  #   Then I should be told "Nope"
# Feature: Feature file

# Scenario: Total due mount
# Given I buy drilling tool worth $200
# And I buy the plant worth $5
# Then Total due month is $205  

  # Scenario Outline:  Today is or not Friday
    # Given Today is <day>
  #   When I ask wheater it Friday yet
  #   Then I should be told <answer>

  # Examples:
  #   | day            | answer |
  #   | Friday         | TGIF |
  #   | Sunday         | Nope |
  #   | anithing else! | Nope |
Feature: Probando

Scenario: trae de la data
  Given Probando que hace bien el get