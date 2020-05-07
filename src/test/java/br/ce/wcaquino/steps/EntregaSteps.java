package br.ce.wcaquino.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class EntregaSteps {
    Date entrega = new Date();

    @Given("^dado que a entrega é dia (\\d+)/(\\d+)/(\\d+)$")
    public void dadoQueAEntregaÉDia(Integer dia, Integer mes, Integer ano) throws Throwable {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.DAY_OF_MONTH, dia);
        cal.set(Calendar.MONTH, mes - 1);
        cal.set(Calendar.YEAR, ano);
        entrega = cal.getTime();
    }

    @When("^a entrega atrasar (\\d+) (dia|dias|mes|meses)$")
    public void aEntregaAtrasarDias(int int1, String tempo) throws Throwable {
        Calendar cal = Calendar.getInstance();
        cal.setTime(entrega);
        if (tempo.equals("dias")) {
            cal.add(Calendar.DAY_OF_MONTH, int1);
        }if(tempo.equals("meses") || tempo.equals("mes")){
            cal.add(Calendar.MONTH, int1);
        }


        entrega = cal.getTime();
    }

    @Then("^a entrega sera efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
    public void aEntregaSeraEfetuadaEm(String data) {

        DateFormat formataData = new SimpleDateFormat("dd/MM/yyyy");
        String dataFormatada = formataData.format(entrega);
        Assert.assertEquals(data, dataFormatada);
    }
}
