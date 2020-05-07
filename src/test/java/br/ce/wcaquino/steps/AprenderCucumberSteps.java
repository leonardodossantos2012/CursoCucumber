package br.ce.wcaquino.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AprenderCucumberSteps {

    @Given("que criei o arquivo corretamente")
    public void queCrieiOArquivoCorretamente() throws Throwable{
        // Write code here that turns the phrase above into concrete actions
        System.out.print("Passou!");
    }

    @When("executa-lo")
    public void executaLo() throws Throwable{
        System.out.print("Passou!");
    }

    @Then("a especificação deve finalizar com sucesso")
    public void aEspecificaçãoDeveFinalizarComSucesso() throws Throwable{
        System.out.print("Passou!");
    }

}
