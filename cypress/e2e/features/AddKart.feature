Feature: Add items to kart

    Scenario: Add first 4 items to kart and remove least items
        Given I add first four items to my cart
        When I view my cart
        Then I find total four items listed in my cart
        When I search for lowest price item
        And I am able to remove the lowset price item from my cart
        Then I am able to verify three items in my cart

    Scenario: Add 4 random items to kart and remove least items
        Given I add four random items to my cart
        When I view my cart
        Then I find total four items listed in my cart
        When I search for lowest price item
        And I am able to remove the lowset price item from my cart
        Then I am able to verify three items in my cart
