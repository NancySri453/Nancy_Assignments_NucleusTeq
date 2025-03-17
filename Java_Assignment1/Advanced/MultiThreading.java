//4. Explore multithreading in Java to perform multiple tasks concurrently.

package Advanced;

class MyRunnable implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - Count: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println(e.getMessage());
            }
        }
    }   
}

public class MultiThreading{
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable(), "Thread A");
        Thread t2 = new Thread(new MyRunnable(), "Thread B");

        t1.start(); 
        t2.start();
    }
}

// Runnable is used instead of Thread because it is more flexible , efficient and saperates thread logic from execution.