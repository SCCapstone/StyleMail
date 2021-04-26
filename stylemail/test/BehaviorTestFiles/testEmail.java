import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class testEmail {

	public static void main(String[] args) {
		ChromeOptions chromeOptions = new ChromeOptions();
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver(chromeOptions);		 
		driver.get("https://run.stylemail.app/login");					
		
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);			
		driver.findElement(By.xpath("//*[@id=\"login\"]")).sendKeys("khegs99@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("dR2NVtdu3sPO");						
		
		
		driver.findElement(By.xpath("//*[@id=\"bottom\"]")).click();//click login

		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[2]/div/div[3]/div[1]/button")).click();
		
		driver.findElement(By.xpath("//*[@id=\"Get Well\"]")).click();

		
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[1]/div/form/label[1]/input "))
		.sendKeys("johnDoe@gmail.com ");					
			
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[1]/div/form/label[2]/input"))
		.sendKeys("Kevin");
			
	
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[1]/div/form/label[3]/input"))
		.sendKeys("khegs99@gmail.com");
					
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[1]/div/form/label[5]/input"))
		.sendKeys("Hang In There !");
		
					
		driver.findElement(By.xpath("//*[@id=\"textarea\"]"))
		.sendKeys("Hey Miles, Get beter !");
				
				
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[1]/div/form/button[4]")).click();//click send 
	
		
	}

}
