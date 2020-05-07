package br.ce.wcaquino.steps;

import br.ce.wcaquino.entidades.AluguelService;
import br.ce.wcaquino.entidades.Filme;
import br.ce.wcaquino.entidades.NotaAluguel;
import br.ce.wcaquino.entidades.TipoAluguel;
import br.ce.wcaquino.utils.DateUtils;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class AluguelLocadoraStep {

    private Filme filme = new Filme();
    private AluguelService aluguel = new AluguelService();
    private NotaAluguel nota = new NotaAluguel();
    private String erro;
    private TipoAluguel tipoAlugel;


    @Given("^um filme com estoque de (\\d+) unidades$")
    public void umFilmeComEstoqueDeUnidades(Integer int1) throws Throwable {
        filme = new Filme();
        filme.setEstoque(int1);
    }

    @Given("^que o preço do aluguel seja R\\$ (\\d+)$")
    public void queOPrecoDoAluguelSejaR$(Integer int1) throws Throwable {
        filme.setValorAluguel(int1);
    }

    @Given("^um filme$")
    public void umFilme(DataTable table) throws Throwable {
        Map<String, String> map = table.asMap(String.class, String.class);
        filme = new Filme();
        String tipo = map.get("tipo");
        tipoAlugel = tipo.equals("semanal") ? TipoAluguel.SEMANAL : tipo.equals("extendido") ? TipoAluguel.EXTENTIDO : TipoAluguel.COMUM;
        filme.setEstoque(Integer.parseInt(map.get("estoque")));
        filme.setValorAluguel(Integer.parseInt(map.get("preco")));
    }

    @When("^alugar$")
    public void alugar() {
        try {
            nota = aluguel.alugar(filme, tipoAlugel);
        } catch (RuntimeException e) {
            erro = e.getMessage();
        }

    }

    @Then("^o preço do aluguel será R\\$ (\\d+)$")
    public void oPreçoDoAluguelSeráR$(int int1) throws Throwable {
        Assert.assertEquals(int1, nota.getPreco());
    }

    @Then("^o estoque do filme será (\\d+) unidade$")
    public void oEstoqueDoFilmeSeráUnidade(int int1) throws Throwable {
        Assert.assertEquals(int1, filme.getEstoque());

    }

    @Then("^não será possível por falta de estoque$")
    public void nãoSeráPossívelPorFaltaDeEstoque() throws Throwable {
        Assert.assertEquals("Filme sem estoque", erro);
    }

    @Given("^que o tipo do aluguel seja (.*)$")
    public void queOTipoDoAluguelSejaExtendido(String tipo) throws Throwable {
        tipoAlugel = tipo.equals("semanal") ? TipoAluguel.SEMANAL : tipo.equals("extendido") ? TipoAluguel.EXTENTIDO : TipoAluguel.COMUM;
    }

    @Then("^a data de entrega será em (\\d+) dias?$")
    public void aDataDeEntregaSeráEmDias(int int1) throws Throwable {
        Date dataEsperada = DateUtils.obterDataDiferencaDias(int1);
        Date dataReal = nota.getDataEntrega();

        DateFormat formart = new SimpleDateFormat("dd/MM/YYYY");
        Assert.assertEquals(formart.format(dataEsperada), formart.format(dataReal));
    }

    @Then("^a pontuação será de (\\d+) pontos$")
    public void aPontuaçãoSeráDePontos(int int1) throws Throwable {
        Assert.assertEquals(int1, nota.getPontuacao());
    }


}
