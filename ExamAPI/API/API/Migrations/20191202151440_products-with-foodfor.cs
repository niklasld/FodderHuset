using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class productswithfoodfor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Animal_Products_ProductsId",
                table: "Animal");

            migrationBuilder.DropIndex(
                name: "IX_Animal_ProductsId",
                table: "Animal");

            migrationBuilder.DropColumn(
                name: "ProductsId",
                table: "Animal");

            migrationBuilder.AddColumn<string>(
                name: "FoodFor",
                table: "Products",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FoodFor",
                table: "Products");

            migrationBuilder.AddColumn<int>(
                name: "ProductsId",
                table: "Animal",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Animal_ProductsId",
                table: "Animal",
                column: "ProductsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Animal_Products_ProductsId",
                table: "Animal",
                column: "ProductsId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
