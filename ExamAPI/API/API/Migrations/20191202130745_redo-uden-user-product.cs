using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class redoudenuserproduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProductID",
                table: "User");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProductID",
                table: "User",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
