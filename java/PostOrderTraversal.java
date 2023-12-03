class TreeNode {
    int val;
    TreeNode left, right;

    public TreeNode(int val) {
        this.val = val;
        this.left = this.right = null;
    }
}

public class PostOrderTraversal {
    public static void main(String[] args) {
        // Create nodes for the binary tree
        TreeNode root = new TreeNode(1);
        TreeNode leftChild = new TreeNode(2);
        TreeNode rightChild = new TreeNode(3);
        TreeNode leftGrandchild = new TreeNode(4);
        TreeNode rightGrandchild = new TreeNode(5);
        TreeNode greatleftGrandchild = new TreeNode(6);
        TreeNode greatrightGrandchild = new TreeNode(7);

        // Connect the nodes to form a binary tree
        root.left = leftChild;
        root.right = rightChild;
        leftChild.left = leftGrandchild;
        leftChild.right = rightGrandchild;
        rightChild.left = greatleftGrandchild;
        rightChild.right = greatrightGrandchild;

        // Print the values of the binary tree
        System.out.println("Binary Tree Values:");
        traverse(root);

    }

 private static void traverse(TreeNode root) {
        if(root==null)
        {
            return;
        } 
            traverse(root.left);
            traverse(root.right);
            System.out.print(root.val + " ");
    }
}
