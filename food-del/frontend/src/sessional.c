#include <stdio.h>

void heapify(int H[], int n, int i) {
    int largest = i;
    int left = 3 * i + 1;
    int mid = 3 * i + 2;
    int right = 3 * i + 3;


    if (left < n && H[left] > H[largest])
        largest = left;

    if (mid < n && H[mid] > H[largest])
        largest = mid;


    if (right < n && H[right] > H[largest])
        largest = right;

    if (largest != i) {
        int temp = H[i];
        H[i] = H[largest];
        H[largest] = temp;

        
        heapify(H, n, largest);
    }
}

void makeheap(int H[], int n) {
    for (int i = n / 3 - 1; i >= 0; i--) {
        heapify(H, n, i);
    }
}

void printHeap(int H[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", H[i]);
    }
    printf("\n");
}

int main() {
    int H[] = {25, 16, 24, 7, 10, 7, 7, 20, 9, 1, 7, 2, 5, 5, 8};
    int n = sizeof(H) / sizeof(H[0]);

    makeheap(H, n);

    printf("Ternary heap in array form:\n");
    printHeap(H, n);

    return 0;
}