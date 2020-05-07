
Feature: Aprender Cucumber

  @unitario
  Scenario: Deve executar especificação
    Given que criei o arquivo corretamente
    When executa-lo
    Then a especificação deve finalizar com sucesso

  @funcional
  Scenario: Deve incrementar contador
    Given que o valor do contador é 15
    When eu incrementar em 3
    Then o valor do contador será 18

  @unitario
  Scenario: Deve calcular atraso na entrega
    Given dado que a entrega é dia 05/04/2018
    When a entrega atrasar 2 dias
    Then a entrega sera efetuada em 07/04/2018

  Scenario: Deve calcular atraso no prazo de entrega da China
    Given dado que a entrega é dia 05/04/2018
    When a entrega atrasar 3 mes
    Then a entrega sera efetuada em 05/07/2018
