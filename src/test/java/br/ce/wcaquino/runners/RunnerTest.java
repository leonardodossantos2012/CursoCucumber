package br.ce.wcaquino.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features="C:\\Users\\leona\\eclipse-workspace\\CursoCucumber\\src\\test\\resource\\features\\alugar_filme.feature",
        glue = "br.ce.wcaquino.steps",
        strict = false,
        //tags = {"@unitario", "~@funcional"},
        plugin = {"pretty", "html:C:\\Users\\leona\\eclipse-workspace\\CursoCucumber\\target\\report-html", "json:C:\\Users\\leona\\eclipse-workspace\\CursoCucumber\\target\\report.json"},
        monochrome = true,
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        dryRun = false //passando = true ele valida se a estrutura do teste esta correta
        )
public class RunnerTest {
}
