import java.util.Scanner;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;


public class WellnessPage {
  public static void main(String[] args) throws IOException{

    FileReader fr = new FileReader("/Users/erwin/CitrusHacks2022-Project/Diets.txt");
    BufferedReader br = new BufferedReader(fr);
    
    String newString;

    while((newString = br.readLine()) != null) {
        System.out.println(newString);
    }

    br.close();

    }
}