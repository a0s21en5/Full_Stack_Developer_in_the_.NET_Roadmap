using System.Data.SqlClient;
using System.Data;

namespace To_Do.Infrastructure.Data
{
    public class DbContext
    {
        private readonly string _connectionString;

        public DbContext(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public IDbConnection CreateConnection()
        {
            return new SqlConnection(_connectionString);
        }

        public IDbConnection GetOpenConnection()
        {
            var connection = CreateConnection();
            connection.Open();
            return connection;
        }
    }
}
