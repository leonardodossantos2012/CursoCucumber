package br.ce.wcaquino.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class ContadorSteps {

    private int contador = 0;

    @Given("que o valor do contador é {int}")
    public void queOValorDoContadorÉ(int int1) throws Throwable {
        contador = int1;

    }

    @When("eu incrementar em {int}")
    public void euIncrementarEm(int int1) {
        contador = contador + int1;
    }

    @Then("o valor do contador será {int}")
    public void oValorDoContadorSerá(int int1) {
        System.out.println(int1);
        System.out.println(contador);
        Assert.assertEquals(int1, contador);
    }
}
