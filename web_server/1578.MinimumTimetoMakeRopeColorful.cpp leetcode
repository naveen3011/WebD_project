class Solution {
public:
    int minCost(string c, vector<int>& t) {
        int n = c.length(), ans = 0, i = 0;
        while(i < n) {
            int j = i+1;
            int sum = t[i], maxi = t[i];
            while(j < n && c[i] == c[j]) {
                sum += t[j];
                maxi = max(maxi, t[j]);
                j++;
            }
            
            ans += (sum - maxi);
            i = j;
        }
        return ans;
    }
};
